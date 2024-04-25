const getTasks = async (status) => {
  const query = await fetch(`${import.meta.env.VITE_API_TASK_URL}/get-tasks`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: status,
    }),
  });

  const { body } = await query.json();

  const parsedBody = JSON.parse(body);

  return parsedBody;
};

const createTask = async (title, status) => {
  const query = await fetch(`${import.meta.env.VITE_API_TASK_URL}/post-task`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      status: status,
      title: title,
    }),
  });

  const { body } = await query.json();

  const parsedBody = JSON.parse(body);

  return parsedBody;
};

const updateTask = async (id, title, status) => {
  const query = await fetch(
    `${import.meta.env.VITE_API_TASK_URL}/update-task`,
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: id,
        status: status,
        title: title,
      }),
    }
  );

  const { body } = await query.json();

  const parsedBody = JSON.parse(body);

  return parsedBody;
};

const deleteTask = async (id) => {
  const query = await fetch(
    `${import.meta.env.VITE_API_TASK_URL}/delete-task`,
    {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item_id: id,
      }),
    }
  );

  const { body } = await query.json();

  const parsedBody = JSON.parse(body);

  return parsedBody;
};

export { getTasks, createTask, updateTask, deleteTask };
