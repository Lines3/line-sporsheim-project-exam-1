const url = "https://linestudent.no/project-exam-1/wp-json/wp/v2/posts?_embed";
const resultsContainer = document.querySelector(".blogPosts");

async function fetchBlogs() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        resultsContainer.innerHTML = "";

        const blogs = json;

        console.log(json);

        blogs.forEach(function (blog) {
            resultsContainer.innerHTML += `<a href="blog_specific.html?id=${blog.id.rendered}" class="card">
                                                
                                                <div class="details">
                                                <h4 class="id">${blog.content.rendered}</h4>
                                                </div>
                                                </a>`;

        })
    }

    catch (error) {
        console.log(error);
        resultsContainer.innerHTML = displayError();
    }
}

fetchBlogs();