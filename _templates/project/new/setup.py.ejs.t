---
to: setup.py
---
from os
from setuptools import setup

# Utility function to read the README file.
# Used for the long_description.  It's nice, because now 1) we have a top level
# README file and 2) it's easier to type in the README file than to put a raw
# string in below ...


def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()


setup(
    name='<%= package %>',
    version='1.0.0',
    author='<%= author %>',
    description=(
        '<%= description %>'
    ),
    license='Private',
    packages=['src'],
    install_requires=[
        # Framework
        'torch',
        'torchvision',
        'tensorflow',
        'tqdm',
        'numpy',
        'pandas',
        'sklearn',
        'scipy',

        # Common
        'ipdb',
        'psutil',
        'requests',
        'pathlib',

        # Visualization
        'networkx',
        'matplotlib',
        'seaborn',

        # Notebooks
        'jupyter',
        'jupyterlab',

        # Style
        'black',
        'nb-black',
        'SQ-Black',
        'pytest-black',
        'jupyterlab-black',

        # Linting
        'pylint',

        # Test
        'pytest',
        'pytest-sugar',
        'pytest-watch'
    ],
    long_description=read('README.md'),
)
