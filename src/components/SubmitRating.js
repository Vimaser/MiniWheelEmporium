import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

const submitRating = async (productDocId, userId, newRating) => {
  const db = getFirestore();
  const ratingRef = doc(db, 'Ratings', `${productDocId}_${userId}`);
  const productRef = doc(db, 'Products', productDocId);

  // Add or update the rating
  await setDoc(ratingRef, {
    productDocId,
    userId,
    rating: newRating
  });

  // Get the current product data
  const productSnap = await getDoc(productRef);
  if (productSnap.exists()) {
    const productData = productSnap.data();
    const newCount = (productData.ratingCount || 0) + 1;
    const newAverage = ((productData.averageRating || 0) * (newCount - 1) + newRating) / newCount;

    // Update product's average rating and rating count
    await updateDoc(productRef, {
      averageRating: newAverage,
      ratingCount: newCount
    });
  } else {
    console.log("No such product!");
  }
};

export default submitRating;