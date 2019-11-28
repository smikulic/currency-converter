const delayFunctionExecution = (that, functionDelayed, delayTime = 800) => {
  if (that.timer) {
    clearTimeout(that.timer);
    that.timer = null;
  }

  that.timer = setTimeout(() => {
    functionDelayed()
  }, delayTime);
}
  
export default delayFunctionExecution;
  