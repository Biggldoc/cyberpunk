'use strict';

const profileImage = document.getElementsByClassName('profile-image')[0];
const profileImageHidden = document.getElementsByClassName('profile-image')[1];
const skills = document.getElementsByClassName('skills')[0];
 
profileImage.addEventListener('click', function() {
  profileImage.classList.add('hinge');

  setTimeout(function() {
    profileImage.classList.add('hidden');
    profileImageHidden.classList.remove('hidden');
  }, 1000)
})