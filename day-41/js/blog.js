const serverApi = `https://tdnmqx-8080.csb.app`;

let params = {
  _page: 1,
  _limit: 2,
};

const getBlogs = async (params = {}) => {
  try {
    // console.log(params);

    let query = new URLSearchParams(params).toString();
    if (query) {
      query = "?" + query;
    }
    const response = await fetch(serverApi + "/blogs" + query);
    const blogs = await response.json();
    renderBlog(blogs);
  } catch (e) {
    console.log(e.message);
  }
};

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
  const scrollPosition = window.scrollY + window.innerHeight;
  const windowHeight = document.documentElement.offsetHeight;

  if (Math.abs(scrollPosition - windowHeight) < 1) {
    params._page++;
    params._limit++;
    getBlogs(params);
  }
});

getBlogs(params);
