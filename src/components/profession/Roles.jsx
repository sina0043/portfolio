// Roles.tsx
const Roles = ({ role }) => {
  return (
    <div className="relative bg-white rounded-xl p-6 mb-6 shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-picto-primary">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
        <h3 className="text-xl font-semibold text-gray-900">
          {role.title}
        </h3>

        <span className="text-sm text-gray-400 mt-1 sm:mt-0">
          {role.period}
        </span>
      </div>

      {/* Company */}
      <div className="text-sm text-gray-600 mb-3">
        <a
          href={role.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-picto-primary hover:underline"
        >
          {role.company}
        </a>{" "}
        · {role.type} · {role.location}
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm sm:text-base mb-4">
        {role.description}
      </p>

      {/* Details List */}
      {role.details && role.details.length > 0 && (
        <ul className="mb-4 space-y-2">
          {role.details.map((detail, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="text-picto-primary mr-2 mt-1">▸</span>
              {detail}
            </li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {role.technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Roles;