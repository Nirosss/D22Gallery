'use strict'
$(document).ready(init)

function init() {
  renderProjects(gProjs)
  console.log('Starting up')
}

function renderProjects(projects) {
  var strHTML = projects.map(
    (project) => ` 
<div class="col-md-4 col-sm-6 portfolio-item" data-proj="${project.id}">
  <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
    <div class="portfolio-hover">
      <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img class="img-fluid" src="img/portfolio/${project.id}.jpg" />
  </a>
  <div class="portfolio-caption">
    <h4>${project.name}</h4>
    <p class="text-muted">${project.title}</p>
  </div>
</div>
      `
  )
  $('#portfolio').html(strHTML)
  $('.portfolio-item').on('click', renderModal)
}

function renderModal() {
  var projectId = $(this).data().proj
  var project = getProjectById(projectId)
  var strHTML = `
                  <h2>${project.name}</h2>
                  <p class="item-intro text-muted">
                    ${project.title}
                  </p>
                  
                  <img
                    class="img-fluid d-block mx-auto"
                    src="img/portfolio/${project.id}.jpg"
                    alt=""
                  />
                  <a href="${
                    project.url
                  }/" class="btn btn-info" role="button">Click to try</a>
                   <p> 
                  ${project.desc}
                  </p>
                  <ul class="list-inline">
                    <li>Date: ${getDateToDisplay(project.publishedAt)}</li>
                    <li>Category: Games</li>
                    <li>
                  </li>
                  </ul>
                  <button
                    class="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i class="fa fa-times"></i>
                    Close Project
                  </button>
                   
      `
  $('.modal-body').html(strHTML)
}
