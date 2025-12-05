package son.boseok.livestream.user.application.port.out

interface PasswordEncoderPort {
    fun encode(rawPassword: String): String
    fun matches(rawPassword: String, encodePassword: String): Boolean
}