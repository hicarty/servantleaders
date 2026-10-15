import type { Metadata } from "next"
import Image from "next/image"
import { BlogArticle } from "@/components/blog-article"
import { getBlogPost } from "@/components/blog-posts"

const post = getBlogPost("super-ai-native-programming")

export const metadata: Metadata = { title: `${post.title} — Servant Leaders UK` }

export default function SuperAiNativeProgrammingPage() {
  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      <Image
        src="/images/Firefly_remove lines and arrows for annotations 767830.png"
        alt="MVVM framework diagram showing a cluster of models and the view"
        width={624}
        height={416}
        sizes="(max-width: 624px) 100vw, 624px"
        className="my-8 h-auto w-full"
      />
      <p>
        AI-native programming Al-Powered Software Development Using Standards & Practices
We use Al to accelerate development, applying proven standards and practices to build scalable, secure and maintainable solutions — structured with the MVVM architecture. 
is more than asking a model to write code. Using standards like MVVM, Frameworks like Laravel in PHP and React for Node based applications for JavaScript driven web development.
It is
        designing the whole development process around a close, deliberate
        collaboration between people and AI.
      </p>
      <h2>Keep people responsible for the outcome</h2>
      <p>
        AI can help explore options, draft implementation, and catch issues
        early. People still need to define the problem, understand the system,
        and judge whether the result is correct, secure, and useful.
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
    </BlogArticle>
  )
}
