"use client";
import Image from "next/image";
import React,{useState} from "react";
export default function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState("");
  const submitButton=(e:any)=>{
    e.preventDefault();
    alert("You're logged in successfully");
    console.log(name,password,gender,skills);
    setName("");
    setPassword("");
    setGender("");
    setSkills("");
    e.target.reset();
  }
  return (
    <>
    <div className="min-h-screen flex flex-col justify-between">
    <header className="bg-gray-800 text-white py-4">
    <nav className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold">Nahar ॐ  Family</a>
        <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/" className="hover:text-gray-300">About us</a></li>
        </ul>
    </nav>
</header>
            <main className="container mx-auto my-8">
                <form id="userForm" className="max-w-lg mx-auto"  onSubmit={submitButton}>
                    <h2 className="text-2xl font-semibold mb-4">User Data</h2>
                    <label htmlFor="username" className="block mb-2">Username:</label>
                    <input type="text" id="username" name="username" required className="w-full p-2 border border-gray-300 rounded mb-4" 
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                    />

                    <label className="block mb-2">Password:</label>
                    <input type="password" id="password" name="password" required className="w-full p-2 border border-gray-300 rounded mb-4 text-black" 
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    />

                    <label className="block mb-2">Gender:</label>
                    <div className="flex mb-4">
                        <input type="radio" id="male" name="gender" value="male" className="mr-2" 
                        onChange={(e)=>setGender(e.target.value)}
                        
                        />
                        <label htmlFor="male" className="mr-4">Male</label>
                        <input type="radio" id="female" name="gender" value="female" className="mr-2" 
                        onChange={(e)=>setGender(e.target.value)}
                        />
                        <label htmlFor="female">Female</label>
                    </div>

                    <label htmlFor="skills" className="block mb-2">Skills:</label>
                    <select id="skills" name="skills" className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
                    onChange={(e)=>setSkills(e.target.value)}
                    value={skills}
                    >
                        <option value="JS">JavaScript</option>
                        <option value="React">React</option>
                        <option value="API">API</option>
                        <option value="Backend">Backend</option>
                    </select>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                </form>
            </main>

            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto text-center">
                    &copy; 2024 Nahar ॐ  Family
                </div>
                <ul>
                  <center>
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/" className="hover:text-gray-300">About us</a></li>
            </center>
        </ul>
            </footer>
        </div>
    </>
  );
}
