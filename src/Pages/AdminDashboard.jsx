/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { FaClipboardList } from "react-icons/fa";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    const querySnapshot = await getDocs(collection(db, "requests"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setRequests(data);
    setLoading(false);
  };

  const deleteRequest = async (id) => {
    await deleteDoc(doc(db, "requests", id));
    fetchRequests();
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto p-6"
    >
      <div className="flex items-center gap-3 mb-10 text-[#2563EB] border-b pb-4">
        <FaClipboardList className="text-3xl animate-pulse" />
        <h1 className="text-3xl font-extrabold tracking-tight">
          لوحة التحكم - الطلبات
        </h1>
      </div>

      {loading ? (
        <p className="text-gray-500 animate-pulse">جارٍ تحميل الطلبات...</p>
      ) : requests.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600 text-lg"
        >
          لا توجد طلبات حتى الآن.
        </motion.p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((req, idx) => (
            <motion.div
              key={req.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="p-5 border rounded-xl shadow-md bg-white hover:shadow-lg transition duration-300 relative"
            >
              <div className="space-y-1 text-sm text-gray-700">
                <p>
                  <strong>👤 الاسم:</strong> {req.name}
                </p>
                <p>
                  <strong>📞 الهاتف:</strong> {req.countryCode}
                  {req.phone}
                </p>
                <p>
                  <strong>✉️ البريد:</strong> {req.email}
                </p>
                <p>
                  <strong>📚 الكورس:</strong> {req.course}
                </p>
                <p>
                  <strong>💰 السعر:</strong> {req.price} ريال
                </p>
              </div>
              <button
                onClick={() => deleteRequest(req.id)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
              >
                حذف الطلب
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
};

export default AdminDashboard;
