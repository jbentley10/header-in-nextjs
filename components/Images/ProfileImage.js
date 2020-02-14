function ProfileImage() {
  return <img className="rounded-full h-full sm:w-full md:w-4/6 flex items-center justify-center" src="../static/profile.webp" onError="this.src='../static/profile.jpg'" alt="John Bentley Freelance Web Designer" />
}

export default ProfileImage;