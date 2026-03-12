import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdPrivacyTip } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { TbFileText } from "react-icons/tb";
import { navLinks } from "./navLinksData";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

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
							<div className="bg-[#5e4ae3] text-white p-6">
								<div className="flex flex-row items-center justify-between font-semibold text-2xl select-none">

									<span className="text-black-500">
										BookByte
									</span>

									<span>
										<RxCross2 size={26} strokeWidth={1} onClick={() => setOpen(false)} />
									</span>

								</div>

								<p className="text-sm text-start opacity-90 mt-1">
									Login to explore books, save favorites and track reading.
								</p>

								<div className="flex gap-3 mt-4">
									<a className="flex-1 text-center bg-[#ff00cc] text-white font-medium py-2 rounded-md cursor-pointer">
										Login
									</a>

									<a className="flex-1 text-center border border-white py-2 rounded-md cursor-pointer">
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
													className="flex items-center gap-3 text-gray-800 hover:text-red-600 text-base font-semibold">
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
								<h3 className="text-xl text-start font-bold text-black uppercase mb-4">
									Help
								</h3>

								<ul className="space-y-3">
									<li>
										<a className="flex items-center gap-3 text-gray-800 hover:text-red-600 text-base font-semibold">
											<HiOutlineInformationCircle size={20} />
											About
										</a>
									</li>

									<li>
										<a className="flex items-center gap-3 text-gray-800 hover:text-red-600 text-base font-semibold">
											<FiPhone size={20} />
											Contact
										</a>
									</li>

									<li>
										<a className="flex items-center gap-3 text-gray-800 hover:text-red-600 text-base font-semibold">
											<MdPrivacyTip size={20} />
											Privacy
										</a>
									</li>

									<li>
										<a className="flex items-center gap-3 text-gray-800 hover:text-red-600 text-base font-semibold">
											<TbFileText size={20} />
											Terms
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				) : (
					<RiMenu3Fill size={26} strokeWidth={1} />
				)}
			</button>

			{/* Mobile Menu */}
		</div>
	);
};

export default MobileMenu;
