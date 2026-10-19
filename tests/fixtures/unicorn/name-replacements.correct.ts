interface Request {
  params: Record<string, string>
}

interface Response {
  send: (body: string) => void
}

export function handle(req: Request, res: Response) {
  const err = new Error(req.params.id)
  res.send(err.message)
}
