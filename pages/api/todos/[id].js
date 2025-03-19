import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === "PATCH") {
    try {
      const { title, isCompleted } = req.body;

      if (title === undefined && isCompleted === undefined) {
        return res.status(400).json({ error: "No update fields provided" });
      }

      const updatedTodo = await prisma.todo.update({
        where: { id: id },
        data: {
          ...(isCompleted !== undefined && { isCompleted }),
          ...(title !== undefined && { title }),
        },
      });

      res.status(200).json(updatedTodo);
    } catch {
      res.status(500).json({ error: "Failed to update todo" });
    }
  } else if (req.method === "DELETE") {
    try {
      await prisma.todo.delete({ where: { id: id } });
      res.status(200).json({ message: "Todo silindi." });
    } catch {
      res.status(500).json({ error: "Todo silinemedi." });
    }
  } else {
    res.setHeader("Allow", ["PATCH", "DELETE"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
