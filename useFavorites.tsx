import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

export const useFavorites = () => {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFavorites = useCallback(async () => {
    if (!user) {
      setFavorites([]);
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from('favorites')
      .select('callsign_id')
      .eq('user_id', user.id);

    if (error) {
      console.error('Error fetching favorites:', error);
    } else {
      setFavorites(data?.map(f => f.callsign_id) || []);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  const toggleFavorite = async (callsignId: string) => {
    if (!user) {
      toast.error('Please sign in to save favorites');
      return;
    }

    const isFavorite = favorites.includes(callsignId);

    if (isFavorite) {
      // Remove from favorites
      const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', user.id)
        .eq('callsign_id', callsignId);

      if (error) {
        toast.error('Failed to unsubscribe');
        console.error(error);
      } else {
        setFavorites(prev => prev.filter(id => id !== callsignId));
        toast.success('You have successfully unsubscribed');
      }
    } else {
      // Add to favorites
      const { error } = await supabase
        .from('favorites')
        .insert({ user_id: user.id, callsign_id: callsignId });

      if (error) {
        toast.error('Failed to subscribe');
        console.error(error);
      } else {
        setFavorites(prev => [...prev, callsignId]);
        toast.success('You have successfully subscribed!');
      }
    }
  };

  const isFavorite = (callsignId: string) => favorites.includes(callsignId);

  return { favorites, loading, toggleFavorite, isFavorite };
};
