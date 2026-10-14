import type { Metadata } from "next"
import { BlogArticle } from "@/components/blog-article"
import { getBlogPost } from "@/components/blog-posts"

const post = getBlogPost("complete-wellness-workspace")

export const metadata: Metadata = { title: `${post.title} — Riaz Virani` }

export default function CompleteWellnessWorkspacePage() {
  return (
    <BlogArticle date={post.date} title={post.title} tag={post.tag}>
      <p>You&apos;ve tried the fancy coworking spaces with ping-pong tables and kombucha on tap. You&apos;ve endured corporate wellness programmes with mandatory mindfulness sessions and step-counting competitions. You may even have built the perfect home office with ergonomic everything and motivational quotes.</p>
      <p>But real wellness at work isn&apos;t about perks or programmes. It&apos;s about creating an environment where professional life and personal wellbeing support each other, rather than competing for attention.</p>
      <h2>Stop performing wellness</h2>
      <p>Most workplace wellness initiatives are wellness theatre: they look good on paper but leave the real sources of stress untouched. A complete workspace should make focused work, recovery, community and meaningful growth easier to access every day.</p>
      <h2>What an integrated membership makes possible</h2>
      <ul>
        <li>A calm, considered place to focus and do deep work</li>
        <li>Flexible workspace that supports different rhythms and working styles</li>
        <li>Wellbeing practices built into the working day, not bolted on as an afterthought</li>
        <li>Genuine community, connection and conversations that move ideas forward</li>
        <li>Practical support for sustainable performance without the corporate nonsense</li>
      </ul>
      <h2>The complete wellness workspace</h2>
      <p>The best workspace is not simply a desk. It is an ecosystem: a place to work, reset, meet people, learn and build a life around work that feels coherent. That is the value of an integrated membership — one thoughtful environment supporting the whole person.</p>
      <blockquote>Wellness is not a perk. It is the condition that makes good work sustainable.</blockquote>
    </BlogArticle>
  )
}
