import type { ReactNode } from "react"
import Image from "next/image"

export const body: ReactNode = (
  <>
    <Image
      src="/images/Firefly_remove lines and arrows for annotations 767830.png"
      alt="MVVM framework diagram showing a cluster of models and the view"
      width={624}
      height={416}
      sizes="(max-width: 624px) 100vw, 624px"
      className="my-8 h-auto w-full"
    />
    <p>
      AI-native programming is more than asking a model to write code. Using
      standards like MVVM, frameworks like Laravel in PHP and React for
      JavaScript-driven web development, we apply proven standards and practices
      to build scalable, secure and maintainable solutions. It is designing the
      whole development process around a close, deliberate collaboration between
      people and AI.
    </p>
    <h2>Keep people responsible for the outcome</h2>
    <p>
      AI can help explore options, draft implementation, and catch issues early.
      People still need to define the problem, understand the system, and judge
      whether the result is correct, secure, and useful.
    </p>
    <h2>Build a disciplined feedback loop</h2>
    <p>
      Small changes, clear tests, and frequent review make AI assistance more
      reliable. The faster code can be produced, the more important it is to
      verify assumptions and keep the design understandable.
    </p>
    <p>
      The opportunity is not simply to produce more code. It is to spend less
      time on routine work and more time on thoughtful engineering.
    </p>
  </>
)
