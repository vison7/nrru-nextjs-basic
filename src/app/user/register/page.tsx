"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          first_name,
          last_name,
          email,
        }),
      });

      console.log("res:", response);

      if (!response.ok) {
        const errorData = await response.json();
        setSuccess("");
        setError(errorData.message || "Username or Email Duplicate.");
        return;
      }

      //   Login successful, handle session (e.g., set cookies or local storage)
      const data = await response.json();
      localStorage.setItem("token", data.token); // Store token
      setSuccess("Register successfully!");
      resetFrm();
      //   router.push("/user/profile"); // Redirect to profile
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  const resetFrm = () => {
    setUsername("");
    setPassword("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setError("");
  };

  return (
    <div className="blockContent">
      <h1>Register</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {success && <p style={{ color: "green" }}>{success}</p>}

      <div className="boxLogin">
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>Username:</td>
                <td>
                  <div className="frmBox">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>Password:</td>
                <td>
                  <div className="frmBox">
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>First Name:</td>
                <td>
                  <div className="frmBox">
                    <input
                      type="text"
                      placeholder="First Name"
                      value={first_name}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>Last Name:</td>
                <td>
                  <div className="frmBox">
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={last_name}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td>Email:</td>
                <td>
                  <div className="frmBox">
                    <input
                      type="text"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <button type="submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
