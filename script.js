function readMore(button) {
  const post = button.parentElement;
  const fullText = "This is the full content of the blog post. In a real blog, this would redirect to the post's dedicated page.";
  const paragraph = post.querySelector('p');

  paragraph.innerText = fullText;
  button.remove(); // Remove the button after expanding
}
