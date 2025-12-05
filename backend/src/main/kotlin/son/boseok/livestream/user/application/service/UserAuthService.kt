package son.boseok.livestream.user.application.service

import jakarta.transaction.Transactional
import org.springframework.stereotype.Service
import son.boseok.livestream.user.application.port.`in`.CreateUserCommand
import son.boseok.livestream.user.application.port.`in`.CreateUserUseCase
import son.boseok.livestream.user.application.port.`in`.LoginCommand
import son.boseok.livestream.user.application.port.`in`.LoginResult
import son.boseok.livestream.user.application.port.`in`.LoginUsecase
import son.boseok.livestream.user.application.port.`in`.UserInfo
import son.boseok.livestream.user.application.port.out.JwtTokenPort
import son.boseok.livestream.user.application.port.out.LoadUserPort
import son.boseok.livestream.user.application.port.out.PasswordEncoderPort
import son.boseok.livestream.user.application.port.out.SaveUserPort
import son.boseok.livestream.user.domain.Role
import son.boseok.livestream.user.domain.User
import java.util.UUID

@Service
class UserAuthService (
    private val loadUserPort: LoadUserPort,
    private val saveUserPort: SaveUserPort,
    private val passwordEncoderPort: PasswordEncoderPort,
    private val jwtTokenPort: JwtTokenPort
): CreateUserUseCase, LoginUsecase {

    @Transactional
    override fun create (command: CreateUserCommand): UserInfo {
        if (loadUserPort.existsByEmail(command.email)) {
            throw IllegalArgumentException("The email already exists.")
        }

        val newUUID = UUID.randomUUID()
        val encodedPassword = passwordEncoderPort.encode(command.rawPassword)
        val user = User(
            uid = newUUID,
            email = command.email,
            encodedPassword = encodedPassword,
            nickname = command.nickname,
            roles = setOf(Role.USER)
        )

        val saved = saveUserPort.save(user)
        return saved.toUserInfo()
    }

    override fun login (command: LoginCommand): LoginResult {
        val user = loadUserPort.findByEmail(command.email)
            ?: throw IllegalArgumentException("The email or password is incorrect.")

        if (!passwordEncoderPort.matches(command.rawPassword, user.encodedPassword))
            throw IllegalArgumentException("The email or password is incorrect.")

        val accessToken = jwtTokenPort.generateAccessToken(user)
        val refreshToken = jwtTokenPort.generateRefreshToken(user)

        return LoginResult(accessToken, refreshToken)
    }

    private fun User.toUserInfo() =
        UserInfo(
            uid = this.uid,
            email = this.email,
            nickname = this.nickname,
            roles = this.roles.map { it.name }.toSet()
        )
}