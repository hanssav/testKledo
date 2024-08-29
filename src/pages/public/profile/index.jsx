import ListItem from '../../../helpers/public/components/ListItem';
import Navbar from '../../../helpers/public/components/Navbar';

function Profile() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Profile</h1>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <div className="flex flex justify-between space-x-6">
            <div className="flex-shrink-0 order-last">
              <img 
                src="https://via.placeholder.com/100" 
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-blue-500"
              />
            </div>

            <div>
              <ul className="space-y-4">
                <ListItem label="Nama" value="Handi Irawan" />
                <ListItem label="Alamat" value="Jl Dusun Bringin ds wonosari Kabupaten Kediri" />
                <ListItem label="No HP" value="085655512335" />
                <ListItem label="Email" value="handiirawanub@gmail.com" />
                <ListItem label="Moto" value="" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
