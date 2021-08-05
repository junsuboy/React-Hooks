const useClick = (onHover) => {
  if (typeof onHover !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("hover", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("hover", onHover);
      }
    };
  }, []);
  return element;
};
