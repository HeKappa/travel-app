import React from 'react';


function UserProfile() {
  // This data is just for display purposes. You might fetch actual data from an API.
  const userProfile = {
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Travel enthusiast and blogger",
    profileImage: "https://via.placeholder.com/150" // This is a placeholder image URL. You can replace it with an actual profile image URL.
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-md rounded-lg p-8">
            <div className="flex flex-col items-center">
              <img 
                src={userProfile.profileImage} 
                alt="User" 
                className="w-24 h-24 rounded-full"
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-800">{userProfile.name}</h2>
              <p className="text-sm text-gray-600 text-center mt-3">{userProfile.bio}</p>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-gray-800">Contact Information</h4>
              <p className="text-sm text-gray-600"><strong>Email:</strong> {userProfile.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;