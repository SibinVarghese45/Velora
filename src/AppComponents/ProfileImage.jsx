

// eslint-disable-next-line react/prop-types
const ProfileImage = ({profileImage}) => {
    
        return (
        <div className="rounded-full absolute right-2">
            <img src={profileImage} alt="profileImage" />
        </div>
        )
}

export default ProfileImage