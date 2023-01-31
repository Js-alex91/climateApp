const useScreens = (step, setStep) => {
  function progress(): number {
    if (step.step1) {
      return 1
    } else if (step.step2) {
      return 2
    } else if (step.step3) {
      return 3
    } else {
      return 4
    }
  }

  const handleGoBack = (): void => {
    step.step4
      ? setStep({
          step4: false,
          step3: true,
          step2: false,
          step1: false,
        })
      : step.step3
      ? setStep({
          step4: false,
          step3: false,
          step2: true,
          step1: false,
        })
      : step.step2
      ? setStep({
          step4: false,
          step3: false,
          step2: false,
          step1: true,
        })
      : step.step1 &&
        setStep({
          ...step,
          // navigate.goBack()
        })
  }

  const handleActive = (screen: number) => {
    screen === 1
      ? setStep({
          step: false,
          step3: false,
          step2: false,
          step1: true,
        })
      : screen === 2
      ? setStep({
          step4: false,
          step3: false,
          step2: true,
          step1: false,
        })
      : screen === 3
      ? setStep({
          step4: false,
          step3: true,
          step2: false,
          step1: false,
        })
      : screen === 4 &&
        setStep({
          step4: true,
          step3: false,
          step2: false,
          step1: false,
        })
  }

  return {
    progress,
    handleGoBack,
    handleActive,
  }
}

export default useScreens
