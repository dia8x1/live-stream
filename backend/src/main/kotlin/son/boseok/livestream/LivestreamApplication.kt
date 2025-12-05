package son.boseok.livestream

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class LivestreamApplication

fun main(args: Array<String>) {
	runApplication<LivestreamApplication>(*args)
}
