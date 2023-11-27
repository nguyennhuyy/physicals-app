export function replayContent(content) {
  return (content || "").replace(
    /\/uploads/g,
    "https://congthucvatly.com/uploads"
  );
}

export function handleImage(image) {
  if (typeof image === "string") {
    return image.includes("/uploads")
      ? {
          uri: replayContent(image),
        }
      : image.includes(".gif")
      ? {
          uri: `https://congthucvatly.com/uploads/images/${image}`,
        }
      : image;
  }

  return image;
}

export function checkContainFormula(content) {
  return (content || "").includes("<math");
}
