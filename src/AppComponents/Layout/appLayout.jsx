import DashBoard from "@/pages/DashBoard";
import { Sidebar, Navbar } from "../../AppComponents/Navigation";

const appLayout = () => {
	return (
		<div className='flex h-screen overflow-y-scroll bg-white'>
			<Sidebar />
			<div className='flex-1 flex flex-col'>
				<Navbar />
				<div className='flex-1 h-screen p-1'>
					<DashBoard />
				</div>
			</div>
		</div>
	);
};

export default appLayout;
