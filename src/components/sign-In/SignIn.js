import React from "react";
import CommonWallpaper from "../commonwallpaper/Common";
import "./signIn.scss";

function SignIn() {
	return (
		<div>
			<CommonWallpaper />

			<div className="form-main-container">
				{" "}
				<div class=" absolute pt-40 ps-35 " id="form-sub-container">
					<div class=" flex flex-col" className="form-container">
						<form class="bg-black bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4" style={{ height: "75vh", width: "55vh" }}>
							<label class="block text-white text-lg font-bold mb-5" for="username" className="signIn-label">
								Sign In
							</label>

							<div class="mb-4" className="input-container">
								<input class=" appearance-none  rounded w-full py-2 px-3 text-#8c8c8c leading-tight focus:outline-none" type="text" placeholder="Email or phone number" className="form-input" />
							</div>
							<div class="mb-6" className="input-container">
								<input class="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" className="form-input" />
								<p class="text-red-500 text-xs italic">Please choose a password.</p>
							</div>
							<div>
								<button class="text-white font-bold w-full py-2 px-3 mb-3 rounded focus:outline-none focus:shadow-outline" id="sign-in-btn">
									Sign In
								</button>
							</div>

							<div class="flex items-center justify-between">
								<div class="flex items-start">
									<div class="flex items-center h-5">
										<input
											id="remember"
											aria-describedby="remember"
											type="checkbox"
											class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
											required=""
										/>
									</div>
									<div class="ml-3 text-sm">
										<label for="remember" class="text-gray-500" className="font-color">
											Remember me
										</label>
									</div>
								</div>
								<a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500" className="font-color">
									Need Help?
								</a>
							</div>

              <div class="absolute">
                <div class= "flex"> <p class="text-center text-gray-500 text-xs">New to Netflix? </p>
							<p class="text-center text-gray-500 text-xs"> Sign up now</p> </div>
							
							<p class="text-center text-gray-500 text-xs"> This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more</p>{" "}
						</div>
						</form>

						
					</div>
				</div>{" "}
			</div>
		</div>
	);
}

export default SignIn;
