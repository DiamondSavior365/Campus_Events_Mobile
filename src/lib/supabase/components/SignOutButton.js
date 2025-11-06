import { supabase } from '../supabase';
import React from 'react';
import { Button } from 'react-native';

async function onSignOutButtonPress({ navigation }) {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Error signing out:', error);
  }
}

export default function SignOutButton({ navigation }) {
  return <Button title="Sign out" onPress={onSignOutButtonPress} />
}