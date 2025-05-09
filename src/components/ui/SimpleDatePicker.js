import React, { useState, useRef, useEffect } from 'react';
import { Button, Overlay, Popover } from 'react-bootstrap';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import { CalendarIcon } from 'lucide-react';

const SimpleDatePicker = ({ value, onChange, placeholder = "Sélectionner une date" }) => {
  const [date, setDate] = useState(value);
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const handleSelect = (newDate) => {
    setDate(newDate);
    if (onChange) {
      onChange(newDate);
    }
    setShow(false);
  };

  const handleButtonClick = () => {
    setShow(!show);
  };

  // Ferme le popover lorsqu'on clique ailleurs sur la page
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (target.current && !target.current.contains(event.target) && show) {
        // Si le clic est en dehors du bouton et du popover
        const popover = document.querySelector('.rdp');
        if (popover && !popover.contains(event.target)) {
          setShow(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  return (
    <div className="simple-date-picker">
      <Button
        ref={target}
        variant="outline-secondary"
        onClick={handleButtonClick}
        className="date-picker-button w-100 text-left d-flex justify-content-between align-items-center"
      >
        {date ? format(date, "dd MMMM yyyy", { locale: fr }) : placeholder}
        <CalendarIcon className="calendar-icon" size={18} />
      </Button>

      <Overlay
        show={show}
        target={target.current}
        placement="bottom-start"
        container={document.body}
        rootClose
        onHide={() => setShow(false)}
      >
        <Popover id="date-picker-popover">
          <Popover.Body className="p-0">
            <DayPicker
              mode="single"
              selected={date}
              onSelect={handleSelect}
              locale={fr}
              className="border-0"
            />
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export { SimpleDatePicker }; 