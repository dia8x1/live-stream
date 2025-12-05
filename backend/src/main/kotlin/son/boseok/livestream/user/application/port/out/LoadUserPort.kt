package son.boseok.livestream.user.application.port.out

import son.boseok.livestream.user.domain.User

interface LoadUserPort {
    fun findByEmail(email: String): User?
    fun existsByEmail(email: String): Boolean
}