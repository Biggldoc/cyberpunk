'use strict';

const profileImage = document.getElementsByClassName('profile-image')[0];
const profileImageHidden = document.getElementsByClassName('profile-image')[1];
const skills = document.getElementsByClassName('skills')[0];
const skillsLi = skills.getElementsByTagName('li');

for(let li of skillsLi) {
  li.addEventListener('click', function() {
    this.classList.toggle('animated');
    this.classList.toggle('bounce');
  });
}

profileImage.addEventListener('click', function() {
  profileImage.classList.add('hinge');

  setTimeout(function() {
    profileImage.classList.add('hidden');
    profileImageHidden.classList.remove('hidden');
  }, 1000)
})