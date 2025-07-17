import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SweetCard from '../components/SweetCard';

const SweetDetails = () => {
  const { id } = useParams(); // Grab ID from URL
  const [sweet, setSweet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSweet = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/sweets/${id}`);
        setSweet(res.data);
      } catch (error) {
        console.error('Error fetching sweet:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSweet();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-orange-600 text-xl font-semibold animate-pulse">
          Loading sweet details...
        </p>
      </div>
    );
  }

  if (!sweet) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-orange-500 text-xl font-medium">
          Sweet not found. Please try another one!
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center p-6 bg-orange-50">
      <SweetCard key={sweet._id} sweet={sweet} />
    </div>
  );
};

export default SweetDetails;


