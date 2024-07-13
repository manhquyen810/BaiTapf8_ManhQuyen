const serverApi = `http://localhost:3000`;
let page = 1;
const getBlogs = async () => {
  try {
    const response = await fetch(`${serverApi}/blogs?page=${page}`);
    const blogs = await response.json();
    renderBlog(blogs);
    //   testBlog(blogs);
    console.log(blogs);
    page++;
  } catch (e) {
    console.log(e.message);
  }
};
// getBlogs();

const renderBlog = (blogs) => {
  const content = document.querySelector(".content");
  const blogsInfor = blogs
    .map(({ author, time, content, links }) => {
      return `<section class="blog mt-6">
              <div class="time">
                <span class="days">${time.days} ngày trước</span>
                <div class="clock">
                  <span class="hours">${time.hour}</span
                  ><span class="mins">${time.min}</span>
                </div>
              </div>
              <div class="blog-content">
                <div class="blog-name">
                  <span class="circle"><a href="#" class="alpha">${
                    author.avatar
                  }</a></span>
                  <a href="#" class="name">${author.username}</a>
                </div>
                <h2>${content.title}</h2>
                <p>${content.body}</p>
                ${links
                  .map(
                    (link) => `<span class="link">
                  <span class="hashtag">#</span>
                  <a href="#" class="link-infor">${link.text}</a>
                </span>`
                  )
                  .join("")}
                <hr style="width: 100%" />
              </div>
            </section>`;
    })
    .join("");

  content.innerHTML += blogsInfor;
};

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    getBlogs();
  }
});

getBlogs();
