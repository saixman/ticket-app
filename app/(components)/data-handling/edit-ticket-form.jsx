"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { TicketPriority } from "@/app/(models)/ticket-priority";
import { TicketCategory } from "@/app/(models)/ticket-category";
import { TicketStatus } from "@/app/(models)/ticket-status";

const TicketForm = ({ ticket, isEditMode }) => {
  const router = useRouter();

  const defaultData = isEditMode
    ? { ...ticket }
    : {
        title: "",
        description: "",
        priority: TicketPriority.LOW,
        progress: 0,
        status: TicketStatus.NOT_STARTED,
        category: TicketCategory.HARDWARE,
      };

  const pageText = isEditMode
    ? {
        title: "Update your ticket",
        btnText: "Update ticket",
      }
    : {
        title: "Create new ticket",
        btnText: "Create ticket",
      };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response;

    if (isEditMode) {
      response = await fetch(`/api/tickets/${ticket._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
      });

      if (!response.ok) {
        throw new Error("Failed to update ticket.");
      }
    } else {
      response = await fetch("/api/tickets", {
        method: "POST",
        body: JSON.stringify({ formData }),
      });

      if (!response.ok) {
        throw new Error("Failed to create ticket.");
      }
    }

    router.refresh();
    router.push("/");
  };

  const [formData, setFormData] = useState(defaultData);

  return (
    <div className='flex justify-center'>
      <form
        className='flex flex-col gap-3 w-1/2'
        method='post'
        onSubmit={handleSubmit}
      >
        <h3>{pageText.title}!</h3>

        <label>Title</label>
        <input
          id='title'
          name='title'
          type='text'
          onChange={handleChange}
          required
          value={formData.title}
        />

        <label>Description</label>
        <textarea
          id='description'
          name='description'
          type='text'
          rows={5}
          onChange={handleChange}
          required
          value={formData.description}
        />

        <label>Category</label>
        <select
          name='category'
          value={formData.category}
          onChange={handleChange}
        >
          <option value={TicketCategory.HARDWARE}>
            {TicketCategory.HARDWARE}
          </option>
          <option value={TicketCategory.SOFTWARE}>
            {TicketCategory.SOFTWARE}
          </option>
          <option value={TicketCategory.PROJECT}>
            {TicketCategory.PROJECT}
          </option>
        </select>

        <label>Priority</label>
        <div>
          <input
            id='priority-1'
            name='priority'
            type='radio'
            value={TicketPriority.HIGH}
            checked={formData.priority == TicketPriority.HIGH}
            onChange={handleChange}
          />
          <label>{TicketPriority.HIGH}</label>

          <input
            id='priority-2'
            name='priority'
            type='radio'
            value={TicketPriority.MEDIUM}
            checked={formData.priority == TicketPriority.MEDIUM}
            onChange={handleChange}
          />
          <label>{TicketPriority.MEDIUM}</label>

          <input
            id='priority-3'
            name='priority'
            type='radio'
            value={TicketPriority.LOW}
            checked={formData.priority == TicketPriority.LOW}
            onChange={handleChange}
          />
          <label>{TicketPriority.LOW}</label>
        </div>

        <label>Progress</label>
        <input
          type='range'
          id='progress'
          name='progress'
          value={formData.progress}
          min={0}
          max={100}
          onChange={handleChange}
        />

        <label>Status</label>
        <select name='status' value={formData.status} onChange={handleChange}>
          <option value={TicketStatus.NOT_STARTED}>
            {TicketStatus.NOT_STARTED}
          </option>
          <option value={TicketStatus.STARTED}>{TicketStatus.STARTED}</option>
          <option value={TicketStatus.DONE}>{TicketStatus.DONE}</option>
        </select>

        <input
          type='submit'
          className='btn w-sm self-center'
          value={pageText.btnText}
        />
      </form>
    </div>
  );
};

export default TicketForm;
