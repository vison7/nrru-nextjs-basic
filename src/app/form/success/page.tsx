"use client";
import { useSearchParams } from "next/navigation";

const Success = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  let message = 'An unexpected error occurred.';
  let isSuccess = false;

  if (code === '200') {
    message = 'Operation successful!';
    isSuccess = true;
  } else if (code) {
    message = `Operation failed with code: ${code}`;
  } else {
    message = 'No code parameter found.';
  }
  return (
    <div className="blockContent">
     <h1>{isSuccess ? 'Success' : 'Error'} Page</h1>
     <p>{message}</p>

     <a href="/form">Back</a>
    </div>
  );
};

export default Success;
