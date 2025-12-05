package son.boseok.livestream.user.application.port.out

import son.boseok.livestream.user.domain.User

interface SaveUserPort {
    fun save(user: User): User
}