package son.boseok.livestream.user.application.port.out

import son.boseok.livestream.user.domain.User

interface JwtTokenPort {
    fun generateAccessToken(user: User): String
    fun generateRefreshToken(user: User): String
}