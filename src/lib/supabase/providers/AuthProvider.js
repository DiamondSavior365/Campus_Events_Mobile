import React, { useEffect, useState } from 'react';
import { AuthContext } from '../hooks/useAuthContext';
import { supabase } from '../supabase';

export default function AuthProvider({ children }) {
  const [session, setSession] = useState(undefined);
  const [profile, setProfile] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      setIsLoading(true);
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error fetching session:', error);
      } else {
        setSession(data.session ?? null);
      }
      setIsLoading(false);
    };

    fetchSession();

    const { data: subscriber } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('Auth state changed:', { event: _event, session });
      setSession(session);
    });

    return () => {
      subscriber?.subscription?.unsubscribe?.();
    };
  }, []);

  useEffect(() => {
    // optional: fetch user's profile from "profiles" table when session changes
    const fetchProfile = async () => {
      setIsLoading(true);
      if (session && session.user && session.user.id) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        setProfile(data ?? null);
      } else {
        setProfile(null);
      }
      setIsLoading(false);
    };
    fetchProfile();
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        session,
        profile,
        isLoading,
        isLoggedIn: session != undefined && session != null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
