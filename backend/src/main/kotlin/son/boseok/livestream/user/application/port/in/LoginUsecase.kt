package son.boseok.livestream.user.application.port.`in`

interface LoginUsecase {
    fun login (command: LoginCommand): LoginResult
}

data class LoginCommand (
    val email: String,
    val rawPassword: String
)

data class LoginResult (
    val accessToken: String,
    val refreshToken: String? = null
)
