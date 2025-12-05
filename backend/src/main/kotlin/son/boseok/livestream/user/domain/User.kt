package son.boseok.livestream.user.domain

import java.time.LocalDateTime
import java.util.UUID

data class User (
    val uid: UUID,
    val email: String,
    val encodedPassword: String,
    val nickname: String,
    val roles: Set<Role> = setOf(Role.USER),
    val createdAt: LocalDateTime = LocalDateTime.now(),
    val updatedAt: LocalDateTime = LocalDateTime.now()
) {
    fun changeNickname (newNickname: String): User =
        copy(nickname = newNickname, updatedAt = LocalDateTime.now())
}