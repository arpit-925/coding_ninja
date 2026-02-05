const CourseCard = ({ title, tag, rating, students, image }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-gray-100">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
        {tag}
      </span>
      <h3 className="text-xl font-bold mt-3 mb-2">{title}</h3>
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span> {rating}
        </div>
        <div>{students} learners</div>
      </div>
      <button className="w-full mt-6 py-3 border border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-50 transition">
        View Details
      </button>
    </div>
  </div>
);