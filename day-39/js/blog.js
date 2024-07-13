const serverApi = `http://localhost:3000`;
const getBlogs = async () => {
  const response = await fetch(`${serverApi}/blogs`);
  const blogs = await response.json();
  renderBlog(blogs);
  //   testBlog(blogs);
  console.log(blogs);
};
// getBlogs();

const renderBlog = (blogs) => {
  const content = document.querySelector(".content");
  content.innerHTML = `${blogs
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
                <span class="hashtag">#</span
                ><a href="#" class="link-infor">${link.text}</a></span
              >`
                )
                .join("")}
              <hr style="width: 100%" />
            </div>
          </section>`;
    })
    .join("")}`;
};

getBlogs();
