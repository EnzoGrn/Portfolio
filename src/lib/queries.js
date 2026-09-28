export const projectsQuery = `*[_type == "project"] | order(order asc) {
  _id,
  "name": title,
  description,
  "tech": coalesce(technologies, []),
  "url": liveUrl,
  "github": githubUrl,
  featured,
  "image": image.asset->url,
}`