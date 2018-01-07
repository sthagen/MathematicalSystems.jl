var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Systems.jl-1",
    "page": "Home",
    "title": "Systems.jl",
    "category": "section",
    "text": "DocTestFilters = [r\"[0-9\\.]+ seconds \\(.*\\)\"]Systems is a Julia package for mathematical systems interfaces."
},

{
    "location": "index.html#Features-1",
    "page": "Home",
    "title": "Features",
    "category": "section",
    "text": "Types for mathematical systems modeling."
},

{
    "location": "index.html#Library-Outline-1",
    "page": "Home",
    "title": "Library Outline",
    "category": "section",
    "text": "Pages = [\n    \"lib/types.md\",\n    \"lib/methods.md\"\n]\nDepth = 2"
},

{
    "location": "lib/types.html#",
    "page": "Types",
    "title": "Types",
    "category": "page",
    "text": ""
},

{
    "location": "lib/types.html#Types-1",
    "page": "Types",
    "title": "Types",
    "category": "section",
    "text": "This section describes systems types implemented in Systems.jl. Pages = [\"types.md\"]\nDepth = 3CurrentModule = Systems\nDocTestSetup = quote\n    using Systems\nend"
},

{
    "location": "lib/types.html#Systems.AbstractSystem",
    "page": "Types",
    "title": "Systems.AbstractSystem",
    "category": "Type",
    "text": "AbstractSystem\n\nAbstract supertype for all system types.\n\n\n\n"
},

{
    "location": "lib/types.html#Systems.AbstractContinuousSystem",
    "page": "Types",
    "title": "Systems.AbstractContinuousSystem",
    "category": "Type",
    "text": "AbstractContinuousSystem\n\nAbstract supertype for all continuous system types.\n\n\n\n"
},

{
    "location": "lib/types.html#Systems.AbstractDiscreteSystem",
    "page": "Types",
    "title": "Systems.AbstractDiscreteSystem",
    "category": "Type",
    "text": "AbstractDiscreteSystem\n\nAbstract supertype for all discrete system types.\n\n\n\n"
},

{
    "location": "lib/types.html#Abstract-Systems-1",
    "page": "Types",
    "title": "Abstract Systems",
    "category": "section",
    "text": "AbstractSystem\nAbstractContinuousSystem\nAbstractDiscreteSystem"
},

{
    "location": "lib/types.html#Systems.LinearContinuousSystem",
    "page": "Types",
    "title": "Systems.LinearContinuousSystem",
    "category": "Type",
    "text": "LinearContinuousSystem\n\nContinuous-time linear system of the form\n\nx = A x\n\nFields\n\nA – square matrix\n\n\n\n"
},

{
    "location": "lib/types.html#Systems.LinearControlContinuousSystem",
    "page": "Types",
    "title": "Systems.LinearControlContinuousSystem",
    "category": "Type",
    "text": "LinearControlContinuousSystem\n\nContinuous-time linear control system of the form\n\nx = A x + B u\n\nFields\n\nA – square matrix\nB – matrix\n\n\n\n"
},

{
    "location": "lib/types.html#Systems.ConstrainedLinearContinuousSystem",
    "page": "Types",
    "title": "Systems.ConstrainedLinearContinuousSystem",
    "category": "Type",
    "text": "ConstrainedLinearContinuousSystem\n\nContinuous-time linear system with state constraints of the form\n\nx = A xx(t)  mathcalX\n\nFields\n\nA – square matrix\nX – state constraints\n\n\n\n"
},

{
    "location": "lib/types.html#Systems.ConstrainedLinearControlContinuousSystem",
    "page": "Types",
    "title": "Systems.ConstrainedLinearControlContinuousSystem",
    "category": "Type",
    "text": "ConstrainedLinearControlContinuousSystem\n\nContinuous-time linear control system with state constraints of the form\n\nx = A x + B ux(t)  mathcalXu(t)  mathcalU text for all  t\n\nFields\n\nA – square matrix\nB – matrix\nX – state constraints\nU – input constraints\n\n\n\n"
},

{
    "location": "lib/types.html#Systems.LinearAlgebraicContinuousSystem",
    "page": "Types",
    "title": "Systems.LinearAlgebraicContinuousSystem",
    "category": "Type",
    "text": "LinearAlgebraicContinuousSystem\n\nContinuous-time linear algebraic system of the form\n\nE x = A x\n\nFields\n\nA – matrix\nE – matrix, same size as A\n\n\n\n"
},

{
    "location": "lib/types.html#Systems.ConstrainedLinearAlgebraicContinuousSystem",
    "page": "Types",
    "title": "Systems.ConstrainedLinearAlgebraicContinuousSystem",
    "category": "Type",
    "text": "ConstrainedLinearAlgebraicContinuousSystem\n\nContinuous-time linear system with state constraints of the form\n\nE x = A xx(t)  mathcalX\n\nFields\n\nA – matrix\nE – matrix, same size as A\nX – state constraints\n\n\n\n"
},

{
    "location": "lib/types.html#Continuous-Systems-1",
    "page": "Types",
    "title": "Continuous Systems",
    "category": "section",
    "text": "LinearContinuousSystem\nLinearControlContinuousSystem\nConstrainedLinearContinuousSystem\nConstrainedLinearControlContinuousSystem\nLinearAlgebraicContinuousSystem\nConstrainedLinearAlgebraicContinuousSystem"
},

{
    "location": "lib/types.html#Systems.LinearDiscreteSystem",
    "page": "Types",
    "title": "Systems.LinearDiscreteSystem",
    "category": "Type",
    "text": "LinearDiscreteSystem\n\nDiscrete-time linear system of the form\n\nx_k+1 = A x_k\n\nFields\n\nA – square matrix\n\n\n\n"
},

{
    "location": "lib/types.html#Systems.LinearControlDiscreteSystem",
    "page": "Types",
    "title": "Systems.LinearControlDiscreteSystem",
    "category": "Type",
    "text": "LinearControlDiscreteSystem\n\nDiscrete-time linear control system of the form\n\nx_k+1 = A x_k + B u_k\n\nFields\n\nA – square matrix\nB – matrix\n\n\n\n"
},

{
    "location": "lib/types.html#Systems.ConstrainedLinearDiscreteSystem",
    "page": "Types",
    "title": "Systems.ConstrainedLinearDiscreteSystem",
    "category": "Type",
    "text": "ConstrainedLinearDiscreteSystem\n\nDiscrete-time linear system with state constraints of the form\n\nx_k+1 = A x_kx_k  mathcalX\n\nFields\n\nA – square matrix\nX – state constraints\n\n\n\n"
},

{
    "location": "lib/types.html#Systems.ConstrainedLinearControlDiscreteSystem",
    "page": "Types",
    "title": "Systems.ConstrainedLinearControlDiscreteSystem",
    "category": "Type",
    "text": "ConstrainedLinearControlDiscreteSystem\n\nDiscrete-time linear control system with state constraints of the form\n\nx_k+1 = A x_k + B u_kx_k  mathcalXu_k  mathcalU text for all  k\n\nFields\n\nA – square matrix\nB – matrix\nX – state constraints\nU – input constraints\n\n\n\n"
},

{
    "location": "lib/types.html#Systems.LinearAlgebraicDiscreteSystem",
    "page": "Types",
    "title": "Systems.LinearAlgebraicDiscreteSystem",
    "category": "Type",
    "text": "LinearAlgebraicDiscreteSystem\n\nDiscrete-time linear algebraic system of the form\n\nE x_k+1 = A x_k\n\nFields\n\nA – matrix\nE – matrix, same size as A\n\n\n\n"
},

{
    "location": "lib/types.html#Systems.ConstrainedLinearAlgebraicDiscreteSystem",
    "page": "Types",
    "title": "Systems.ConstrainedLinearAlgebraicDiscreteSystem",
    "category": "Type",
    "text": "ConstrainedLinearAlgebraicDiscreteSystem\n\nDiscrete-time linear system with state constraints of the form\n\nE x_k+1 = A x_kx_k  mathcalX\n\nFields\n\nA – matrix\nE – matrix, same size as A\nX – state constraints\n\n\n\n"
},

{
    "location": "lib/types.html#Discrete-Systems-1",
    "page": "Types",
    "title": "Discrete Systems",
    "category": "section",
    "text": "LinearDiscreteSystem\nLinearControlDiscreteSystem\nConstrainedLinearDiscreteSystem\nConstrainedLinearControlDiscreteSystem\nLinearAlgebraicDiscreteSystem\nConstrainedLinearAlgebraicDiscreteSystem"
},

{
    "location": "lib/types.html#Systems.InitialValueProblem",
    "page": "Types",
    "title": "Systems.InitialValueProblem",
    "category": "Type",
    "text": "InitialValueProblem\n\nParametric composite type for initial value problems. It is parameterized in the system's type.\n\nExamples\n\njulia> p = InitialValueProblem(LinearContinuousSystem(eye(2)), [-1/2., 1/2]);\n\njulia> p.x0\n2-element Array{Float64,1}:\n -0.5\n  0.5\njulia> statedim(p)\n  2\njulia> inputdim(p)\n  0\n\n\n\n"
},

{
    "location": "lib/types.html#Systems.IVP",
    "page": "Types",
    "title": "Systems.IVP",
    "category": "Type",
    "text": "IVP\n\nIVP is an alias for InitialValueProblem.\n\n\n\n"
},

{
    "location": "lib/types.html#Initial-Value-Problems-1",
    "page": "Types",
    "title": "Initial Value Problems",
    "category": "section",
    "text": "InitialValueProblem\nIVP"
},

{
    "location": "lib/methods.html#",
    "page": "Methods",
    "title": "Methods",
    "category": "page",
    "text": ""
},

{
    "location": "lib/methods.html#Systems.statedim",
    "page": "Methods",
    "title": "Systems.statedim",
    "category": "Function",
    "text": "statedim(s::AbstractSystem)\n\nReturns the dimension of the state space of system s.\n\n\n\n"
},

{
    "location": "lib/methods.html#Systems.inputdim",
    "page": "Methods",
    "title": "Systems.inputdim",
    "category": "Function",
    "text": "inputdim(s::AbstractSystem)\n\nReturns the dimension of the input space of system s.\n\n\n\n"
},

{
    "location": "lib/methods.html#Methods-1",
    "page": "Methods",
    "title": "Methods",
    "category": "section",
    "text": "This section describes systems methods implemented in Systems.jl. Pages = [\"methods.md\"]\nDepth = 3CurrentModule = Systems\nDocTestSetup = quote\n    using Systems\nendstatedim\ninputdim"
},

{
    "location": "about.html#",
    "page": "About",
    "title": "About",
    "category": "page",
    "text": ""
},

{
    "location": "about.html#About-1",
    "page": "About",
    "title": "About",
    "category": "section",
    "text": "This page contains some general information about this project, and recommendations about contributing.Pages = [\"about.md\"]"
},

{
    "location": "about.html#Contributing-1",
    "page": "About",
    "title": "Contributing",
    "category": "section",
    "text": "If you like this package, consider contributing! You can send bug reports (or fix them and send your code), add examples to the documentation, or propose new features.Below some conventions that we follow when contributing to this package are detailed. For specific guidelines on documentation, see the Documentations Guidelines wiki."
},

{
    "location": "about.html#Branches-and-pull-requests-(PR)-1",
    "page": "About",
    "title": "Branches and pull requests (PR)",
    "category": "section",
    "text": "We use a standard pull request policy: You work in a private branch and eventually add a pull request, which is then reviewed by other programmers and merged into the master branch.Each pull request should be pushed in a new branch with the name of the author followed by a descriptive name, e.g., mforets/my_feature. If the branch is associated to a previous discussion in one issue, we use the name of the issue for easier lookup, e.g., mforets/7."
},

{
    "location": "about.html#Unit-testing-and-continuous-integration-(CI)-1",
    "page": "About",
    "title": "Unit testing and continuous integration (CI)",
    "category": "section",
    "text": "This project is synchronized with Travis CI such that each PR gets tested before merging (and the build is automatically triggered after each new commit). For the maintainability of this project, it is important to understand and fix the failing doctests if they exist. We develop in Julia v0.6.0, but for experimentation we also build on the nightly branch.When you modify code in this package, you should make sure that all unit tests pass. To run the unit tests locally, you should do:$ julia --color=yes test/runtests.jlAlternatively, you can achieve the same from inside the REPL using the following command:julia> Pkg.test(\"Systems\")We also advise adding new unit tests when adding new features to ensure long-term support of your contributions."
},

{
    "location": "about.html#Contributing-to-the-documentation-1",
    "page": "About",
    "title": "Contributing to the documentation",
    "category": "section",
    "text": "New functions and types should be documented according to our guidelines directly in the source code.You can view the source code documentation from inside the REPL by typing ? followed by the name of the type or function. For example, the following command will print the documentation of the AbstractSystem type:julia> ?LinearContinuousSystemThis documentation you are currently reading is written in Markdown, and it relies on Documenter.jl to produce the HTML layout. The sources for creating this documentation are found in docs/src. You can easily include the documentation that you wrote for your functions or types there (see the Documenter.jl guide or our sources for examples).To generate the documentation locally, run make.jl, e.g., by executing the following command in the terminal:$ julia --color=yes docs/make.jlNote that this also runs all doctests which will take some time."
},

{
    "location": "about.html#Related-projects-1",
    "page": "About",
    "title": "Related projects",
    "category": "section",
    "text": "Hybrid Systems"
},

{
    "location": "about.html#Credits-1",
    "page": "About",
    "title": "Credits",
    "category": "section",
    "text": "These persons have contributed to Systems.jl (in alphabetic order):Marcelo Forets\nBenoît Legat\nChristian Schilling"
},

]}
