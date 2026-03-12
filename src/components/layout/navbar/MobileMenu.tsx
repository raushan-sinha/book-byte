import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdPrivacyTip } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { TbFileText } from "react-icons/tb";
import { navLinks } from "./navLinksData";
import { Link } from "react-router-dom";

const MobileMenu: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className="relative lg:hidden flex justify-end">
			{/* Menu and Cross Icon */}
			<button onClick={() => setOpen(!open)}>
				{open ? (
					<div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
						{/* Sidebar */}
						<div className="absolute right-0 top-0 h-full w-72 bg-white shadow-xl flex flex-col">
							{/* Header */}
							<div className="bg-red-600 text-white p-6">
								<h2 className="text-lg font-semibold">Welcome to BookByte</h2>

								<p className="text-sm opacity-90 mt-1">
									Login to explore books, save favorites and track reading.
								</p>

								<div className="flex gap-3 mt-4">
									<a className="flex-1 text-center bg-white text-red-600 font-medium py-2 rounded-md">
										Login
									</a>

									<a className="flex-1 text-center border border-white py-2 rounded-md">
										Sign Up
									</a>
								</div>
							</div>

							{/* Navigation */}
							<div className="px-5 py-6 border-b">
								<h3 className="text-xl text-start font-bold text-black uppercase mb-4">
									Navigation
								</h3>

								<ul className="space-y-3">
									{navLinks.map((link, idx) => {
										const Icon = link.icon;

										return (
											<li key={idx}>
												<Link
													to={link.path}
													className="flex items-center gap-3 text-gray-800 hover:text-red-600 text-base font-semibold"
													onClick={() => setOpen(false)}>
													<Icon size={20} />
													{link.name}
												</Link>
											</li>
										);
									})}
								</ul>
							</div>

							{/* Help Section */}
							<div className="px-5 py-6">
								<h3 className="text-sm text-start font-bold text-black uppercase mb-4">
									Help
								</h3>

								<ul className="space-y-3">
									<li>
										<a className="flex items-center gap-3 text-gray-700 hover:text-red-600 text-base font-semibold">
											<HiOutlineInformationCircle size={20} />
											About
										</a>
									</li>

									<li>
										<a className="flex items-center gap-3 text-gray-700 hover:text-red-600">
											<FiPhone size={20} />
											Contact
										</a>
									</li>

									<li>
										<a className="flex items-center gap-3 text-gray-700 hover:text-red-600">
											<MdPrivacyTip size={20} />
											Privacy
										</a>
									</li>

									<li>
										<a className="flex items-center gap-3 text-gray-700 hover:text-red-600">
											<TbFileText size={20} />
											Terms
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				) : (
					<RiMenu3Fill size={26} />
				)}
			</button>

			{/* Mobile Menu */}
		</div>
	);
};

export default MobileMenu;
