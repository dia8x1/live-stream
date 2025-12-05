package son.boseok.livestream.user.application.port.`in`

import java.util.UUID

interface CreateUserUseCase {
    fun create(command: CreateUserCommand): UserInfo
}

data class CreateUserCommand (
    val uid: UUID,
    val email: String,
    val rawPassword: String,
    val nickname: String
)

data class UserInfo (
    val uid: UUID,
    val email: String,
    val nickname: String,
    val roles: Set<String>
)