import React, { useState, useEffect } from "react";
import ContainerEventDetails from "./ContainerEventDetails";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const EVENTS_PER_PAGE = 15;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("BACKEND-API");
        if (!response.ok) throw new Error("Error al cargar eventos");

        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const paginatedEvents = events.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  if (loading) {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Cargando eventos...</p>;
  }

  if (error) {
    return <p style={{ textAlign: "center", marginTop: "2rem", color: "red" }}>{error}</p>;
  }

  return (
    <div>
      {events.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          Actualmente, no hay eventos disponibles.
        </p>
      ) : (
        <>
          {paginatedEvents.map((event) => (
            <ContainerEventDetails
              key={event.id}
              id={event.id}
              name={event.name}
              location={event.location}
              date={event.date}
              organizer={event.organizer}
            />
          ))}
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", margin: "1rem" }}>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  prev < Math.ceil(events.length / EVENTS_PER_PAGE) ? prev + 1 : prev
                )
              }
              disabled={currentPage >= Math.ceil(events.length / EVENTS_PER_PAGE)}
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EventList;
