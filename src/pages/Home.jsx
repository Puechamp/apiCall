import { useAuth } from '../auth/AuthProvider';
import LogInOut from '../auth/LogInOut';
import Comments from '../components/Comments/Comments';

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <LogInOut />
      {isAuthenticated && (
        <div>
          <h2>Leave a Comment</h2>
          <Comments />
        </div>
      )}
    </>
  );
}