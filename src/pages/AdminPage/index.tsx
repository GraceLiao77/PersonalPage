import { useEffect, useState } from 'react';
import SignInAndSignUp from '../SignInAndSignUp';
import TaskManager from '../TaskManager';
import { supabase } from '../../utils/supabase/client';

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);

  const getSessionData = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      console.error(error, 'error');
    }
    if (data) {
      setSession(data.session);
    }
  };

  const exit = async () => {
    await supabase.auth.signOut();
  };

  useEffect(() => {
    getSessionData();

    const { data } = supabase.auth.onAuthStateChange((_e, session) => {
      setSession(session);
    });

    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      {!session ? (
        <SignInAndSignUp />
      ) : (
        <>
          <TaskManager session={session} />
          <button onClick={exit}>Log Out</button>
        </>
      )}
    </div>
  );
}
